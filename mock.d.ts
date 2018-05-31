import { StixCoreEnum } from './stix/stix-core.enum';
import { StixEnum } from './unfetter/stix.enum';
/**
 * @description base class for the spec to mock data objects
 *  override `mockOne` and `mockMany` for custom implementations
 */
export declare abstract class Mock<T> {
    /**
     * @param  {string} id?
     * @returns T
     */
    abstract mockOne(id?: string): T;
    /**
     * @param  {} num=1
     * @param  {string[]} ids?
     * @returns T
     */
    mockMany(num?: number, ids?: string[]): T[];
    /**
     * @param  {} max=1
     * @param  {string[]} ids?
     * @returns T
     */
    genOverRange(max?: number, ids?: string[]): T[];
    /**
     * @description generate a random number
     * @returns number
     */
    protected genNumber(): number;
    /**
     * @description generates an id in stix format eg, `type--type2v4uuid`
     * @param  {StixEnum|StixCoreEnum} type?
     * @returns string
     */
    protected genId(type?: StixEnum | StixCoreEnum): string;
}
