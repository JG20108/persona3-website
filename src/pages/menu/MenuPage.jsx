import { useNavigate } from 'react-router-dom';
import mainVideo from '@assets/main1.mp4';
import P3Menu from './P3Menu';

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <div id="menu-screen">
      <video src={mainVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  );
}
