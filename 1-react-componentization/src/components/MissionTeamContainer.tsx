import type { Hero } from '../interface/Hero'
import MissionControl from './MissionControl'
import MissionTeamList from './MissionTeamList'

type MissionTeamContainerProps = {
  missionTeam: Hero[]
  removeFromMission: (id: number) => void
}

export const MissionTeamContainer = ({
  missionTeam,
  removeFromMission,
}: MissionTeamContainerProps) => {
  return (
    <>
      <h2>Mission Team</h2>
      <MissionTeamList heroes={missionTeam} onRemove={removeFromMission} />
      <MissionControl missionTeam={missionTeam} />
    </>
  )
}