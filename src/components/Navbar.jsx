import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import { SearchBar } from './'

const Navbar = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
        alignItems: 'center',
        p: { sx: 4, md: 0 },
        m: { sx: 0, md: 2 },
        ml: { md: 5 },
        mt: { md: 2 },
        position: { md: 'sticky' },
        background: 'fff',
        top: 0,
        justifyContent: { md: 'space-between' },
      }}
    >
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Link to="/" p={4} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={75} />
        </Link>
      </Box>
      <Box sx={{ p: { xs: 1, sm: 1, md: 0 } }}>
        <Typography
          alignItems="center"
          variant="h3"
          fontWeight="bold"
          m={1}
          sx={{ color: 'black' }}
        >
          PostIT{' '}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Typography
              sx={{
                variant: 'h6',
                color: '383838',
              }}
            >
              The All New Video Streaming Application
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box sx={{ p: { xs: 1, sm: 1, md: 0 } }}>
        <SearchBar />
      </Box>
    </Stack>
  )
}

export default Navbar
