import { Mock } from '../../../mock';
import { StixCoreEnum } from '../../../stix/stix-core.enum';
import { StixEnum } from '../../../unfetter/stix.enum';
import { AssessedObjectMockFactory } from './assessed-object.mock';
import { Category } from './category';

export class CategoryMock extends Mock<Category> {
    public mockOne(): Category {
        const tmp = new Category();
        tmp.id = this.genId(StixEnum.CATEGORY);
        tmp.created_by_ref = this.genId(StixCoreEnum.IDENTITY);
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        tmp.assessed_objects = AssessedObjectMockFactory.mockMany(3);
        return tmp;
    }
}
export const CategoryMockFactory = new CategoryMock();
