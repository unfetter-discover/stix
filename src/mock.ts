import * as UUID from 'uuid';
import { StixCoreEnum } from './stix/stix-core.enum';
import { StixEnum } from './unfetter/stix.enum';

/**
 * @description base class for the spec to mock data objects
 */
export abstract class Mock<T> {
    public abstract mockOne(): T;

    public mockMany(num = 1): T[] {
        return this.genOverRange(num);
    }

    public genOverRange(max = 1): T[] {
        const arr = Array(max).fill(-1).map((_, i) => this.mockOne());
        return arr;
    }

    protected genNumber(): number {
        return Math.round(Math.random() * 90000);
    }
    protected genId(type?: StixEnum | StixCoreEnum): string {
        const uuid = UUID.v4();
        if (type) {
            return type + '--' + uuid;
        }
        return uuid;
    }
}
