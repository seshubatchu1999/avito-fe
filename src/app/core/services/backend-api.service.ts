import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PackingList } from '../models/schemas';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  
  uploadFiles(files: File[]): Observable<any> {
    const response: any = {};
    const totalFiles = files.length;
    
    // Determine number of groups. "at least 3 groups" if possible.
    let numGroups = Math.min(3, totalFiles);
    if (totalFiles === 0) return of({});
    
    // Create random group assignments
    const groupAssignments = files.map((file, index) => {
        // Ensure at least one item per group initially if totalFiles >= numGroups
        if (index < numGroups) {
            return `group_${index + 1}`;
        }
        // Randomly assign the rest
        return `group_${Math.floor(Math.random() * numGroups) + 1}`;
    });

    // Generate mock data for each group
    files.forEach((file, index) => {
        const groupId = groupAssignments[index];
        if (!response[groupId]) {
            response[groupId] = [];
        }

        const mockPackingList: PackingList = {
          shipper_exporter: { name: `Mock Exporter ${index + 1}`, address: "123 Export St", tax_id: null },
          consignee: { name: `Mock Consignee ${index + 1}`, address: "456 Import Ave", tax_id: null },
          notify_party: { name: "Mock Notify Party", address: "789 Notify Blvd", tax_id: null },
          total_package_count: "50",
          total_package_type: "Pallets",
          total_gross_weight: "15000 kg",
          total_measurement: "35 CBM",
          vessel_name: "MSC MOCK",
          voyage_or_flight_number: "001W",
          port_of_loading: "Shanghai",
          port_of_discharge: "Los Angeles",
          containers: [
              { container_number: `MSCU${1234567 + index}`, seal_numbers: ["SEAL001"], container_size_type: "40HQ", package_count: null, package_type: null, gross_weight: null, net_weight: null, cbm_measurement: null }
          ],
          items: [
              { product_code: `PROD-0${index + 1}`, item_product_description: `Mock Product ${index + 1}`, quantity: "1000", gross_weight: "5000 kg", cbm_volume: "15 CBM", package_numbers: null, index_number: null, hsn_code: null, unit_of_measure: null, package_count: null, package_type: null, net_weight: null, dimensions: null, container_number: null, seal_number: null, shipping_marks: null }
          ],
          packing_list_number: null, packing_list_date: null, invoice_number: null, invoice_date: null,
          exporter_reference: null, ie_code: null, branch_code: null, buyer_order_number: null,
          buyer_order_date: null, other_references: [], buyer: null, country_of_origin: null,
          country_of_final_destination: null, pre_carriage_by: null, place_of_receipt: null,
          route_or_place_of_transshipment: null, place_of_final_delivery: null, type_of_movement: null,
          incoterms: null, payment_terms: null, freight_terms: "Prepaid", freight_amount: null,
          release_terms: null, shipment_reference: null, place_of_issue: null, date_of_issue: null,
          shipped_on_board_date: null, number_of_originals: null, delivery_contact: null,
          other_particulars: null, marks_and_numbers: null, total_net_weight: null
        };
        
        response[groupId].push({
            file_name: file.name,
            packing_list: mockPackingList
        });
    });

    return of(response).pipe(delay(2500)); // simulate network delay
  }
}

