import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import React from "react";
import PropTypes from "prop-types";

export default function RecipeCard({ id, imageLink, recipeTitle }) {
  return (
    <Card id={id} sx={{ maxWidth: 240, minHeight: 280 }} raised={true}>
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        alt={recipeTitle}
      />
      <CardContent
        sx={{
          paddingBottom: "2px",
          borderBottom: "2px solid rgba(191, 189, 190, 0.43)",
        }}
      >
        <Typography variant="h5" gutterBottom fontSize="1.2rem">
          {recipeTitle}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "2px",
        }}
      >
        <IconButton aria-label="view calories and macros" size="large">
          <InfoOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="view detailed recipe" size="large">
          <MoreHorizOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="add to my list" size="large">
          <AddCircleOutlineOutlinedIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageLink: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
};
