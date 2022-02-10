import axios from 'axios'

export interface LaunchData {
    details: string,
    launch_date_utc: string,
    mission_name: string,
}

export const getLaunchesData = async (): Promise<LaunchData[]> => (
    axios.get('https://api.spacexdata.com/v3/launches?limit=50&sort=launch_date_utc&order=desc').then(response => response.data)
)
