import React from 'react' 
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import { LightTheme } from './shared/themes'
import { AppRoutes } from './routes'
import { MenuLateral } from './shared/components'

export const App = () => {
	return (
		<ThemeProvider theme={LightTheme}>
			<BrowserRouter>
				<MenuLateral>
					<AppRoutes/>
				</MenuLateral>
			</BrowserRouter>

		</ThemeProvider>
	)
}