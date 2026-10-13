import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

type Level = 'full' | 'view' | 'none'
const columns = ['Finance', 'Donations', 'Projects', 'Documents']
const roles: [string, string, Level[]][] = [
  ['Trustees', 'Oversight across the Trust', ['view', 'view', 'view', 'view']],
  ['Accounts Team', 'Finance and reconciliation', ['full', 'full', 'view', 'view']],
  ['Project Team', 'Activities and allocations', ['none', 'view', 'full', 'full']],
  ['Administrators', 'Roles, records and settings', ['full', 'full', 'full', 'full']],
  ['Staff', 'Day-to-day entries', ['none', 'full', 'view', 'view']],
  ['Auditors', 'Review and audit trail', ['view', 'view', 'view', 'view']],
]
const principles: [string, string][] = [
  ['Role-based access', 'Each person sees what their work requires.'],
  ['Visibility', 'Trustees can follow activity across the Trust.'],
  ['Responsibility', 'Every entry belongs to someone.'],
  ['Approval', 'Decisions move through defined steps.'],
  ['Accountability', 'A record of who did what, and when.'],
]
const levelLabel: Record<Level, string> = { full: 'Manage', view: 'View', none: 'No access' }

export function GovernanceSection() {
  return (
    <section className="governance section" id="governance" aria-labelledby="governance-heading">
      <div className="container governance-grid">
        <div className="governance-copy" data-reveal>
          <Eyebrow light>People &amp; governance</Eyebrow>
          <h2 id="governance-heading" className="display">Clear roles. <em>Thoughtful oversight.</em></h2>
          <p className="lede">Give trustees, accounts teams, project teams, administrators, staff and auditors a view shaped around their responsibilities — with approvals and a trail that keeps everyone accountable.</p>
          <dl className="principles">
            {principles.map(([term, text]) => <div key={term}><dt>{term}</dt><dd>{text}</dd></div>)}
          </dl>
        </div>

        <div className="access-matrix" data-reveal>
          <div className="matrix-head">
            <span><Icon name="lock" size={15}/> Access &amp; accountability</span>
            <span className="matrix-note">Illustrative — configured per Trust</span>
          </div>
          <div className="matrix-scroll"><table>
            <caption className="sr-only">Illustrative example of role-based access in ARAM ERP</caption>
            <thead><tr><th scope="col">Role</th>{columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>
              {roles.map(([role, detail, levels], rowIndex) => (
                <tr key={role} style={{ ['--d' as string]: `${rowIndex * 80}ms` }}>
                  <th scope="row"><span className="role-mark" aria-hidden="true">{role.slice(0, 1)}</span><span><strong>{role}</strong><small>{detail}</small></span></th>
                  {levels.map((level, index) => <td key={columns[index]}><span className={`level level-${level}`} title={levelLabel[level]}><span className="sr-only">{levelLabel[level]}</span></span></td>)}
                </tr>
              ))}
            </tbody>
          </table></div>
          <div className="matrix-legend" aria-hidden="true">
            <span><i className="level level-full"/>Manage</span>
            <span><i className="level level-view"/>View</span>
            <span><i className="level level-none"/>No access</span>
          </div>
        </div>
      </div>
    </section>
  )
}
