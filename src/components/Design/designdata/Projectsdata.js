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
    text: 'Crypt cell was a project that evolved from research I was doing into data and dying online. There is a small nod to this and Sarah Gold Alternet The result was an attempt to disintermediate consumers of data with producers of data, this was done through the user being able to chose who bought their data, therefore people begin to regain control of their data. This worked by taking advantage of current laws that make it inefficient and costly for companies like Google to sell your data, whereas if you were to sell your own data it would be faster, less costly and more accurate. It worked using a delocalized cloud, each users router would store information then using blockchain it could be securely and accurately sold. The concept is similar to Wibson\'s decentralized blockchain platform however to my knowledge Crypt cell was the first to look at this problem. After univeristy I continued work on Crypt cell, changing its name to DataFair and working with two individuals who were in the data industry. Regretfully we had to drop the project due to funding and other constraints.',
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