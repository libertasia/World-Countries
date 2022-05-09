import React from 'react'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { CountryPropType, CountryType } from '../../types'
import { addToFavourites, removeFromFavourites } from '../../redux/actions'

export default function FavouriteButton({ country }: CountryPropType) {
  const dispatch = useDispatch()

  const handleBtnClick = (country: CountryType) => {
    if (country.isInFavourites) {
      dispatch(removeFromFavourites(country))
    } else {
      dispatch(addToFavourites(country))
    }
  }

  return (
    <IconButton
      color="primary"
      aria-label={country.isInFavourites ? 'delete' : 'add'}
      onClick={() => handleBtnClick(country)}
    >
      {country.isInFavourites ? <DeleteIcon /> : <FavoriteIcon />}
    </IconButton>
  )
}
