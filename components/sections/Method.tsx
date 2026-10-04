import { profile } from '@/data/profile';
export default function Method() {
  return (<section id="method"><div className="wrap">
    <h2 className="t">Human × AI × code</h2>
    <p className="sub">AI shortens the distance between an idea and a working system. Judgment stays with me.</p>
    <div className="flow">{profile.workflow.map((w) => <span key={w}>{w}</span>)}</div>
  </div></section>);
}
