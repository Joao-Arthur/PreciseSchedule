import { render } from '@testing-library/react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import setupStore from '../../../../../../Store';
import Cell from './Cell';

let store: Store;

describe('Cell', () => {
    beforeEach(() => {
        store = setupStore();
    });

    it('Should render current month day', () => {
        expect(
            render(
                <Provider store={store}>
                    <Cell year={2021} month={7} day={1} />
                </Provider>
            ).baseElement
        ).toContainHTML('1');
    });

    it('Should render past month day', () => {
        expect(
            render(
                <Provider store={store}>
                    <Cell year={2021} month={7} day={0} />
                </Provider>
            ).baseElement
        ).toContainHTML('31');
    });

    it('Should render next month day', () => {
        expect(
            render(
                <Provider store={store}>
                    <Cell year={2021} month={7} day={32} />
                </Provider>
            ).baseElement
        ).toContainHTML('1');
    });
});
