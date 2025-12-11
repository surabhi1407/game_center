import React from 'react';
import CrewCard from './CrewCard';
import { CrewMember } from '../types';

const crewMembers: CrewMember[] = [
  {
    id: 'marshal',
    name: 'Marshal',
    role: 'Captain of Strategy Games.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaC5DSdB5zZ40rFfBvW65JTmy6P2PZ-cSBywx4WTuOYXszJtMX-EBSEH469bcUj4W5vD-2vmBo0d716fDNLExsz8WlnY7tGxPAxIYA9HposEEsP-KJV_J3UOrRG2_aFMmJLSm3daW8KgmHYbykuxxiTGjTVxr9w8tkN9On6NygIQmV3pSSe_UpIdn4gbmZBoDr3sE_8MSGQuwNqBkkkoLDK9bCVkAnU5c7cjKiDFPhb5XYuforPGg1BKaQ9odAmketec-3Iq_uWA9y',
    altText: 'Stylized illustration of a boy in a space helmet',
    themeColor: 'arcade-purple'
  },
  {
    id: 'hridya',
    name: 'Hridya',
    role: 'Master of Puzzle Worlds.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP2uHF0d9GABBcnIO9g22O8vm_QMxUSVte9U1XgHda-niSdV_IxNQn9lpsqXjKQen11zDoSnZbPhs1uKfa1Up4e9unwzCWwB-QJ823wZ4WbtzEZxDjH_KKzOvkCP5PaqZ4_-I2qk01KGggN47mBGwCVl4VEeD6ZqOD_DrznTBcPR1gmwYRu_TCTGVbQydoeRFB97Z-RcmM6fpwLl--fomYiiHM9tzXj9n6I_OVVQsLvVMPp5k8YM99ZgoY1eUqSIRp5ffgDyXnON1n',
    altText: 'Stylized illustration of a girl with futuristic glasses',
    themeColor: 'arcade-pink'
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'Explorer of Pixel Worlds.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQbxHx3P6l8YpqPQdsZsB0Imgw8QPqchvc1-WaNcrYmaDuceI0bFzfBVLaVVZm6OXWu9x8X9fb5PaMZ_TdKsqS3oWTQkNY4JX9vV3CRb5mvd2clkijKlgDB-qkKwWHrU3qtOKLg_DAtKsvdlxP1tj9KnZxl01oRFbHlu3wJZSjiF6TOqiWXFXaBEPPI1OV8T9F3octY6DeEA45lnww4KmuWygfjTTHvVx_lJVmuw9k9neWyefLB89Lnt1hVro_5zycHW3vcAF97cvH',
    altText: 'Stylized illustration of a boy with neon headphones',
    themeColor: 'arcade-yellow'
  },
  {
    id: 'zoya',
    name: 'Zoya',
    role: 'Queen of Arcade Classics.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2OFy6E_me640j9hX-uC-z-7mr9wBC3xj06zXYrMN6VERhft7Oj4m_905rJKZXAijmC05vNx9hGzd-0vm2_R6-4eMNZ6RouAVbBiocXJBKV7AappKtQkBQeM9X4XpKjjt0IWL2ZUXeRi2255cdnqrWGdElneIB2O3DWAu_Ygq-Ug5AhbEfUAECrfIlifl7p9YMyH9UvwvvL4tu2iyY2ak1u_r5cBKn5QMQZwxQNh6rufiUYR4b5zHSkgxAypTsCdOujxYsRljNCHzx',
    altText: 'Stylized illustration of a girl with a futuristic visor',
    themeColor: 'arcade-cyan'
  }
];

const CrewGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8">
      {crewMembers.map((member) => (
        <CrewCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default CrewGrid;