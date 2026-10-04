import { profile } from '@/data/profile';
export default function Journey() {
  return (<section id="journey"><div className="wrap"><h2 className="t">Journey</h2>
    <div className="tl">{profile.journey.map(([h, t]) => (<div key={h}><b>{h}</b>{t}</div>))}</div></div></section>);
}
