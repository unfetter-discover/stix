import { StixCoreEnum } from './stix/stix-core.enum';
import { StixEnum } from './unfetter/stix.enum';
/**
 * @description base class for the spec to mock data objects
 *  override `mockOne` and `mockMany` for custom implementations
 */
export declare abstract class Mock<T> {
    abstract mockOne(id?: string): T;
    mockMany(num?: number, ids?: string[]): T[];
    genOverRange(max?: number, ids?: string[]): T[];
    protected genNumber(): number;
    /**
     * @description generates an id in stix format eg, `type--type2v4uuid`
     * @param  {StixEnum|StixCoreEnum} type?
     * @returns string
     */
    protected genId(type?: StixEnum | StixCoreEnum): string;
}
