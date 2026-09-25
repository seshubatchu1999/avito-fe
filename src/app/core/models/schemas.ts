export interface Party {
  name: string | null;
  address: string | null;
  tax_id: string | null;
}

export interface ContainerDetail {
  container_number: string | null;
  seal_numbers: string[];
  container_size_type: string | null;
  package_count: string | null;
  package_type: string | null;
  gross_weight: string | null;
  net_weight: string | null;
  cbm_measurement: string | null;
}

export interface PackingListItem {
  product_code: string | null;
  item_product_description: string | null;
  package_numbers: string | null;
  index_number: string | null;
  hsn_code: string | null;
  quantity: string | null;
  unit_of_measure: string | null;
  package_count: string | null;
  package_type: string | null;
  gross_weight: string | null;
  net_weight: string | null;
  dimensions: string | null;
  cbm_volume: string | null;
  container_number: string | null;
  seal_number: string | null;
  shipping_marks: string | null;
}

export interface PackingList {
  packing_list_number: string | null;
  packing_list_date: string | null;
  invoice_number: string | null;
  invoice_date: string | null;
  exporter_reference: string | null;
  ie_code: string | null;
  branch_code: string | null;
  buyer_order_number: string | null;
  buyer_order_date: string | null;
  other_references: string[];
  shipper_exporter: Party | null;
  consignee: Party | null;
  buyer: Party | null;
  notify_party: Party | null;
  country_of_origin: string | null;
  country_of_final_destination: string | null;
  pre_carriage_by: string | null;
  place_of_receipt: string | null;
  vessel_name: string | null;
  voyage_or_flight_number: string | null;
  port_of_loading: string | null;
  route_or_place_of_transshipment: string | null;
  port_of_discharge: string | null;
  place_of_final_delivery: string | null;
  type_of_movement: string | null;
  incoterms: string | null;
  payment_terms: string | null;
  freight_terms: string | null;
  freight_amount: string | null;
  release_terms: string | null;
  shipment_reference: string | null;
  place_of_issue: string | null;
  date_of_issue: string | null;
  shipped_on_board_date: string | null;
  number_of_originals: string | null;
  delivery_contact: string | null;
  other_particulars: string | null;
  marks_and_numbers: string | null;
  total_package_count: string | null;
  total_package_type: string | null;
  total_gross_weight: string | null;
  total_net_weight: string | null;
  total_measurement: string | null;
  items: PackingListItem[];
  containers: ContainerDetail[];
}

export interface HblManualDetails {
  hbl_number: string | null;
  notify_party: Party;
  container_number: string | null;
  seal_number: string | null;
  freight_terms: string | null;
}

export interface MblManualDetails {
  mbl_number: string | null;
  vessel_name: string | null;
  voyage_number: string | null;
  port_of_loading: string | null;
  port_of_discharge: string | null;
  verified_gross_mass: string | null;
  carrier_booking_reference: string | null;
  shipper: Party;
  consignee: Party;
  cargo_description: string | null;
  total_packages: string | null;
  total_gross_weight: string | null;
  total_measurement: string | null;
}

export interface ReviewDraft {
  draft_id: string;
  document_id?: string;
  source_name: string;
  source_document: string; // base64 or buffer
  mime_type: string;
  group_id?: string;
  packing_list: PackingList;
  hbl_details: HblManualDetails;
  details_confirmed: boolean;
  hbl_pdf?: string; // URL to the generated PDF
  hbl_filename?: string;
  hbl_number?: string;
}

export interface MblReview {
  draft_id: string;
  draft_ids: string[]; // List of HBL draft IDs included
  mbl_details: MblManualDetails;
  details_confirmed: boolean;
  mbl_pdf?: string;
  mbl_filename?: string;
  mbl_number?: string;
}
