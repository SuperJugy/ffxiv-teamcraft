import {AbstractExtractor} from './abstract-extractor';
import {I18nName} from '../../../../model/list/i18n-name';
import {ItemData} from '../../../../model/garland-tools/item-data';
import {DataType} from '../data-type';
import {Item} from '../../../../model/garland-tools/item';

export class VoyagesExtractor extends AbstractExtractor<I18nName[]> {

    protected canExtract(item: Item): boolean {
        return item.voyages === undefined;
    }

    protected doExtract(item: Item, itemData: ItemData): I18nName[] {
        const voyages: I18nName[] = [];
        if (item.voyages !== undefined) {
            item.voyages.forEach(v => {
                voyages.push({
                    en: v,
                    fr: v,
                    de: v,
                    ja: v
                });
            });
        }
        return voyages;
    }

    isAsync(): boolean {
        return false;
    }

    getDataType(): DataType {
        return DataType.VOYAGES;
    }

}
