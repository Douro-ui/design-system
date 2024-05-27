export interface Colors {
  brand?: Record<string, string>;
  neutral?: {
    achromatic?: Record<string, string>;
    silver?: Record<string, string>;
    cold?: Record<string, string>;
    warm?: Record<string, string>;
  };
  extended?: {
    blue?: Record<string, string>;
    red?: Record<string, string>;
    beige?: Record<string, string>;
    yellow?: Record<string, string>;
    purple?: Record<string, string>;
    pink?: Record<string, string>;
    green?: Record<string, string>;
    orange?: Record<string, string>;
  };
}

export default {
  brand: {
    primary: '#0B1F2F',
    secondary: '#14306B',
    tertiary: '#284646',
    quaternary: '#EAD9C5',
    quinary: '#EB5B41',
    senary: '#FFBA22',
    septenary: 'B8B9B5',
  },
  neutral: {
    achromatic: {
      black: '#000000',
      white: '#FFFFFF',
    },
    silver: {
      '10': '#1A1A1A',
      '20': '#333333',
      '30': '#4D4D4D',
      '40': '#666666',
      '50': '#808080',
      '60': '#999999',
      '70': '#B3B3B3',
      '80': '#CCCCCC',
      '90': '#E6E6E6',
      '95': '#F2F2F2',
    },
    cold: {
      '10': '#141B1F',
      '20': '#28363E',
      '30': '#3C515D',
      '40': '#506C7C',
      '50': '#63879C',
      '60': '#839FAF',
      '70': '#A2B7C3',
      '80': '#C1CFD7',
      '90': '#E0E7EB',
      '95': '#EFF3F5',
    },
    warm: {
      '10': '#1E1A15',
      '20': '#3C342A',
      '30': '#5A4D3F',
      '40': '#786753',
      '50': '#968169',
      '60': '#AB9A87',
      '70': '#C0B3A5',
      '80': '#D5CDC3',
      '90': '#EAE6E1',
      '95': '#F5F2F0',
    },
  },
  extended: {
    blue: {
      '10': '#08132B',
      '20': '#102756',
      '30': '#183A81',
      '40': '#204DAC',
      '50': '#2860D7',
      '60': '#5380DF',
      '70': '#7EA0E7',
      '80': '#A9C0EF',
      '90': '#D4DFF7',
      '95': '#EAEFFB',
    },
    red: {
      '10': '#2F0404',
      '20': '#5D0909',
      '30': '#8C0D0D',
      '40': '#BA1212',
      '50': '#E91616',
      '60': '#ED4545',
      '70': '#F27373',
      '80': '#F6A2A2',
      '90': '#FBD0D0',
      '95': '#FDE7E7',
    },
    beige: {
      '10': '#251A0E',
      '20': '#4B351B',
      '30': '#704F29',
      '40': '#966A36',
      '50': '#BB8444',
      '60': '#C99D69',
      '70': '#D6B58F',
      '80': '#E4CEB4',
      '90': '#F1E6DA',
      '95': '#F8F2EC',
    },
    yellow: {
      '10': '#332300',
      '20': '#664600',
      '30': '#996900',
      '40': '#CC8C00',
      '50': '#FFAF00',
      '60': '#FFBF33',
      '70': '#FFCF66',
      '80': '#FFDF99',
      '90': '#FFEFCC',
      '95': '#FFF7E5',
    },
    purple: {
      '10': '#140D26',
      '20': '#27194D',
      '30': '#3B2673',
      '40': '#4F3399',
      '50': '#6240BF',
      '60': '#8266CC',
      '70': '#936DFA',
      '80': '#B499FF',
      '90': '#DACEFD',
      '95': '#ECE6FE',
    },
    pink: {
      '10': '#2A0921',
      '20': '#541242',
      '30': '#7E1B62',
      '40': '#A82483',
      '50': '#D22DA4',
      '60': '#DB57B6',
      '70': '#E481C8',
      '80': '#EDABDB',
      '90': '#F6D5ED',
      '95': '#FAEAF6',
    },
    green: {
      '10': '#0C271E',
      '20': '#174F3C',
      '30': '#237659',
      '40': '#2F9D77',
      '50': '#3AC595',
      '60': '#62D0AA',
      '70': '#89DCBF',
      '80': '#B0E8D5',
      '90': '#D8F3EA',
      '95': '#EBF9F4',
    },
    orange: {
      '10': '#301603',
      '20': '#5F2C07',
      '30': '#8F420A',
      '40': '#BE580E',
      '50': '#EE6E11',
      '60': '#F18B41',
      '70': '#F5A870',
      '80': '#F8C5A0',
      '90': '#FCE2CF',
      '95': '#FDF0E7',
    },
  },
};
