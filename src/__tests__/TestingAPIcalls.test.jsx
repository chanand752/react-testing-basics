import { render, screen, waitFor} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import TestingAPICalls from '../components/TestingAPICalls'
import * as services from '../utils/Services'

test("Fetch Data API called", async () => {
    

    const mockFetchData = jest.spyOn(services, 'FetchData')
        .mockImplementation(async () => {
            return [{
                name: 'Leanne Graham'
            }];
        })
    
    render(<TestingAPICalls/>)
    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    })
    
})