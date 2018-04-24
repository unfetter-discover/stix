import { Dictionary } from '../common/dictionary';
import { JsonApiLink } from './jsonapi-link';
/**
 * @description generic data
 */
export interface JsonApiData<T = Dictionary, U = Dictionary<any>> {
    id?: string;
    type: string;
    attributes: T;
    relationships: U;
    links: JsonApiLink;
}
