import Cryptcell from './clientlogos/CryptCell.svg'
import crypt from './Cryptphotos'
import soma from './clientlogos/thedesignmuseum.svg'
import somatic from './Somaphotos'


const projects = [
  {
    row: 'row',
    single: 'single-left',
    logoclass: 'Crypt',
    logo: Cryptcell,
    subtitle: 'CRYPT CELL: An app based system, designed to solve modern social issues around data usage.',
    text: 'Securely and safely share data with businesses in order to receive discounted products. It begins looking at the phenomenon of dying online and managing data left behind. Via a delocalised cloud, each router shares and stores 1 TB of scrambled information. The more people use it the safer it gets. Storing all safely  using an MD5 hash. Using VPN software with blockchain tracking.',
    photos: crypt,
  },
  {
    row: 'row-reverse',
    single: 'single-right',
    logoclass: 'somatic',
    logo: soma,
    subtitle: 'SOMATIC BELT: A winning response to the Design Museum competition: Design Factory 2014.',
    text: 'The Brief : Design a product to make the user feel an emotion. Using Paul Ekman, Magda Arnold and Amy Cuddy’s somatic theory to make the user feel confidence. The Belt simply makes the wearer larger, the body then releases endorphins such as serotonin. Users responded with an increase in confidence, claiming they felt they had just ‘achieved something’.',
    photos: somatic
  }
] 

export default projects