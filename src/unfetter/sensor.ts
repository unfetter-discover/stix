import { Stix } from './stix';
import { StixEnum } from './stix.enum';

/**
 * @description unfetter extension of stix to include sensor
 */
export class Sensor extends Stix {

    constructor(data?: Sensor) {
        super();
        Object.assign(this, data);
        this.type = StixEnum.SENSOR;
    }
}
