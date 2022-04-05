import { Drawer, Icon, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useTheme, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box } from '@mui/system'

export const MenuLateral = ({children}) => {
	const theme = useTheme()
	return (
		<>
			<Drawer variant='permanent'>
				<Box
					width={theme.spacing(26)}
					height='100%'
					display='flex'
					flexDirection='column'
				>
					<Box fex={1} >
						<List component='nav'>
							<ListItemButton>
								<ListItemIcon>
									<Icon>home</Icon>
								</ListItemIcon>
								<ListItemText primary='Home' />
							</ListItemButton>
							

						</List>
					</Box>

				</Box>
				<Box				
					display='flex'
					justifyContent='flex-start'
					alighItems='center'
					margin='14px'
					padding='12px 4px'
					borderTop='1px solid lightgray'
				>
					<Box 
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Typography>
							NOME-USUARIO
						</Typography>

					</Box>
					<IconButton >
						<LogoutIcon/>
					</IconButton>
				</Box>
			</Drawer>
			<Box height='100vh' marginLeft={theme.spacing(24)}>
				{children}
			</Box>	

		</>

	)
}