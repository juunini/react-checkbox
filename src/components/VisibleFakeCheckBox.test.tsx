import { render } from '@testing-library/react';

import VisibleFakeCheckBox from './VisibleFakeCheckBox';

describe('VisibleFakeCheckBox styled is', () => {
  context('When checkedImage is null', () => {
    it('Should style backgroundImage is undefined', () => {
      const { container } = render((
        <VisibleFakeCheckBox
          checkedImage={null}
        />
      ));

      expect(container).toMatchSnapshot();
    });
  });

  context('When checkedImage is not null', () => {
    const givenImageURL: string = '/image.png';

    it('Should style backgroundImage is url("...")', () => {
      const { container } = render((
        <VisibleFakeCheckBox
          checkedImage={givenImageURL}
        />
      ));

      expect(container).toMatchSnapshot();
    });
  });
});
