import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObjectMockFactory } from './assessed-object.mock';
import { Category } from './category';

export class CategoryMock extends Mock<Category> {
    public mockOne(): Category {
        const tmp = new Category();
        tmp.id = StixEnum.CATEGORY + '--' + this.genId();
        tmp.created_by_ref = 'identity--' + this.genId();
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        tmp.assessed_objects = AssessedObjectMockFactory.mockMany(3);
        return tmp;
    }
}
export const CategoryMockFactory = new CategoryMock();
