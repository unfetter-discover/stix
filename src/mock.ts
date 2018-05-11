import * as UUID from 'uuid';
import { StixCoreEnum } from './stix/stix-core.enum';
import { StixEnum } from './unfetter/stix.enum';

/**
 * @description base class for the spec to mock data objects
 *  override `mockOne` and `mockMany` for custom implementations
 */
export abstract class Mock<T> {
    public abstract mockOne(id?: string): T;

    public mockMany(num = 1, ids?: string[]): T[] {
        return this.genOverRange(num, ids);
    }

    public genOverRange(max = 1, ids?: string[]): T[] {
        const arr = Array(max).fill(-1).map((_, i) => {
            if (ids && ids.length <= i) {
                const id = ids[i];
                return this.mockOne(id);
            }
            return this.mockOne();
        });
        return arr;
    }

    protected genNumber(): number {
        return Math.round(Math.random() * 90000);
    }

    /**
     * @description generates an id in stix format eg, `type--type2v4uuid`
     * @param  {StixEnum|StixCoreEnum} type?
     * @returns string
     */
    protected genId(type?: StixEnum | StixCoreEnum): string {
        const uuid = UUID.v4();
        if (type) {
            return type + '--' + uuid;
        }
        return uuid;
    }
}
