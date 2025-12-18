import { Creator, GameMaster } from '../types';

export const creators: Creator[] = [
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

];

export const gameMaster: GameMaster = {
  name: 'Surabhi',
  role: 'Game Master',
  description: 'I use AI to transform kids\' creative ideas into playable games, making coding fun and accessible for everyone. Every game submission becomes a reality through the magic of AI-powered development!',
  imageUrl: 'https://avatars.githubusercontent.com/u/yourusername?v=4', // Replace with your GitHub avatar
  githubUrl: 'https://github.com/yourusername', 
  skills: ['AI Development', 'Game Design', 'React', 'TypeScript']
};

