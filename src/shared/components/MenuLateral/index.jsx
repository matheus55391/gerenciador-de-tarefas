import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { Box } from '@mui/system'

export const MenuLateral = ({children}) => {
	const theme = useTheme()
	return (
		<>
			<Drawer variant='permanent'>
				<Box
					width={theme.spacing(24)}
					height="100%"
					display="flex"
					flexDirection="column"
				>
					<Box fex={1} >
						<List component="nav">
							<ListItemButton>
								<ListItemIcon>
									<Icon>home</Icon>
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
							

						</List>
					</Box>

				</Box>

			</Drawer>
			<Box height="100vh" marginLeft={theme.spacing(24)}>
				{children}
			</Box>

		</>

	)
}