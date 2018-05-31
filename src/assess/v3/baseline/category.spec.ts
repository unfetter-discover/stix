import { StixEnum } from '../../../unfetter/stix.enum';
import { Category } from './category';
import { CategoryMockFactory } from './category.mock';

describe('category model', () => {

    let cut: Category;

    beforeEach(() => {
        cut = CategoryMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.CATEGORY);
        expect(cut.type).toEqual(StixEnum.CATEGORY);
    });

});
