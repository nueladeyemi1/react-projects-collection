import styled from 'styled-components'
import Spinner from '../../ui/Spinner'
import { useCabins } from '../cabins/useCabins'
import TodayActivity from '../check-in-out/TodayActivity'
import DurationChart from './DurationChart'
import SalesChart from './SalesChart'
import Stats from './Stats'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'

const StyledDashboardLayout = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  /* grid-template-columns: repeat(4, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: auto 34rem auto; */
  gap: 2.4rem;

  @media only screen and (max-width: 53.125em) {
    /* grid-template-columns: repeat(2, 1fr) !important; */
    display: flex;
    flex-direction: column;
  }
`

const DashboardLayout = () => {
  const { isLoading: isLoading1, bookings } = useRecentBookings()
  const { isLoading: isLoading2, confirmStays, numDays } = useRecentStays()

  const { isLoading: isLoading3, cabins } = useCabins()

  if (isLoading1 || isLoading2 || isLoading3 || bookings === undefined)
    return <Spinner />

  // console.log(bookings)

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmStays={confirmStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
