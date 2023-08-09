import { awards} from '../../utils/consts'
import { angleToRadians } from '../../utils/angle';
export const awardsList = [
    {
        title: '1st Place',
        contest: 'Hackathon 2022 - BestEM22',
        date: 'May 2022',
        projectTitle: 'Garuda',
        link: 'https://github.com/adidiac/bestemSolution',
        image: awards.first,
        position: [1.8, 0.3,-0.7],
        angles: [angleToRadians(0), angleToRadians(-40), 0],
        describe:'Blockchain-gamification-based platform that enhances the lifestyle of people working in corporations through data from wearable devices and live camera footage, and also the productivity of companies through early burnout prediction'
    },
    {
        title: '1st Place',
        contest: 'Hackathon 2022 - DevHacks',
        date: 'November 2022',
        projectTitle: 'Bach',
        link: 'https://github.com/georgecpp/BACH.git',
        image: awards.first,
        position: [-1.6, 0.3,-0.7],
        angles: [angleToRadians(0), angleToRadians(40), 0],
        describe:`
        Complete Full-Stack Solution to facilitate access to an online shop for people with visual or hearing disabilities. 
        `
    },
    {
        title: '3st Place',
        contest: 'Hackathon 2021',
        date: 'November 2021',
        projectTitle: 'Prevent.io',
        link: 'https://github.com/adidiac/hackTonVersion1',
        image: awards.third,
        position: [-1.4, 0.3,-2.8],
        angles: [angleToRadians(0), angleToRadians(20), 0],
        describe:`
        Frontend and deployment for Prevent.io app - Smarthack 2021 Hackathon 3rd place awarded.Tehnologies used : React js + Redux, Kubernetes+Docker
        `
    },
];