import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { Category } from './category';

export class CategoryMock extends Mock<Category> {
    public mockOne(): Category {
        const tmp = new Category();
        tmp.id = StixEnum.CATEGORY + '--' + this.genId();
        tmp.created_by_ref = 'identity--' + this.genId();
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        return tmp;
    }
}
export const CategoryMockFactory = new CategoryMock();
