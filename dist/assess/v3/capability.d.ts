import { StixEnum } from "../../unfetter/stix.enum";
import { ExternalReference } from "../../stix/external_reference";
/**
 * @description a capability could represent a product, ex. AntiVirus software
 */
export declare class Capability {
    name: string;
    created: string;
    modified: string;
    description: string;
    external_references: ExternalReference[];
    type: StixEnum;
    created_by_ref: string;
    id?: string;
}
