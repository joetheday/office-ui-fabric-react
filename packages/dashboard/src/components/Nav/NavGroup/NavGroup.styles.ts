/* tslint:disable */
import { DefaultPalette, FontWeights } from 'office-ui-fabric-react/lib/Styling';
import { INavGroupStyleProps, INavGroupStyles } from '../Nav.types';

// const BackDropSelector = '@supports (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px))';
const navDividerHeight = 21;
const navDividerColor = 'rgba(0,0,0,.2)';
const navItemHeight = 48;
// const navCollapsedWidth = 48;

export const getStyles = (props: INavGroupStyleProps): INavGroupStyles => {
  // const { isNavCollapsed } = this.props;
  return {
    navGroupDivider: {
      display: 'block',
      position: 'relative',
      height: navDividerHeight,
      textAlign: 'center',
      selectors: {
        '::after': {
          content: '" "',
          width: 'calc(100% - 32px)',
          position: 'absolute',
          height: '1px',
          top: 10,
          left: '16px',
          backgroundColor: navDividerColor
        }
      }
    },
    navGroupTitle: {
      lineHeight: navItemHeight,
      color: DefaultPalette.black,
      fontWeight: FontWeights.bold,
      marginLeft: '16px'
    },
    navItem: {
      position: 'relative'
    },
    navItemWhenNavCollapsed: {
      selectors: {
        ':hover': {
          selectors: {
            div: {
              display: 'flex'
            }
          }
        }
      }
    }
  };
};

/* tslint:enable */
