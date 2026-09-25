import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, map } from 'rxjs';
import { PackingList, Party, ReviewDraft } from '../models/schemas';

@Injectable({
  providedIn: 'root'
})
export class DocumentExtractionService {
  private http = inject(HttpClient);
  
  extractPackingList(file: File): Observable<PackingList> {
    const mockPackingList: PackingList = {
      shipper_exporter: { name: "Mock Exporter Ltd", address: "123 Export St, Industrial Park, Shanghai", tax_id: null },
      consignee: { name: "Mock Consignee Corp", address: "456 Import Ave, Logistics Center, Los Angeles", tax_id: null },
      notify_party: { name: "Mock Notify Party", address: "789 Notify Blvd, San Francisco", tax_id: null },
      total_package_count: "50",
      total_package_type: "Pallets",
      total_gross_weight: "15000 kg",
      total_measurement: "35 CBM",
      vessel_name: "MSC MOCK",
      voyage_or_flight_number: "001W",
      port_of_loading: "Shanghai",
      port_of_discharge: "Los Angeles",
      containers: [
          { container_number: "MSCU1234567", seal_numbers: ["SEAL001"], container_size_type: "40HQ", package_count: null, package_type: null, gross_weight: null, net_weight: null, cbm_measurement: null }
      ],
      items: [
          { product_code: "PROD-01", item_product_description: "Mock Product 1", quantity: "1000", gross_weight: "5000 kg", cbm_volume: "15 CBM", package_numbers: null, index_number: null, hsn_code: null, unit_of_measure: null, package_count: null, package_type: null, net_weight: null, dimensions: null, container_number: null, seal_number: null, shipping_marks: null }
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

    return of(mockPackingList).pipe(delay(2500));
  }

  generateHbl(draft: ReviewDraft): Observable<string> {
    const blankPdf = 'data:application/pdf;base64,JVBERi0xLjAKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjggODQxLjg5XQo+PgplbmRvYmoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNjAgMDAwMDAgbiAKMDAwMDAwMDExNiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDQKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjIxMwolJUVPRgo=';
    return of(blankPdf).pipe(delay(1500));
  }

  generateMbl(mblReview: any): Observable<string> {
    console.log(`[Mock API Request] POST /api/mbl/generate`);
    console.log(`Payload:`, { mblDetails: mblReview.mbl_details, includedHbls: mblReview.draft_ids });
    
    // Simulating an API call that returns a base64 string
    return this.http.get<{filename: string, base64: string}>('/mbl_preview.json').pipe(
      delay(2000), // simulate network delay
      map(response => {
        // Prepend the data URI scheme so the browser can render the PDF base64
        return 'data:application/pdf;base64,' + response.base64;
      })
    );
  }
}
