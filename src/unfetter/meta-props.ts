import { Bag } from '../common/bag';
import { Publishable } from './publishable';

/**
 * @description unfetter extension of stix
 */
export interface MetaProps extends Bag<any>, Publishable { }
