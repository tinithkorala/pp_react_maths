import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const SubTopicCard = ({data}) => {
  return (
    <Grid item md={3} sx={12}>
      <Card sx={{ minWidth: 275, mx: 1, mb: 2 }}>
        <CardContent
          sx={{ backgroundColor: "#003D78", position: "relative", height: 275 }}
        >
          <Typography
            sx={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              width: "75%",
            }}
            gutterBottom
          >
            {data.name}
          </Typography>
          <CardMedia
            component="img"
            height="100%"
            image={data.imageUrl}
            alt={data.name}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              objectFit: "contain",
              width: "35%",
              height: "90%",
            }}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Stack direction="column" gap={5}>
            <Typography
              sx={{
                fontSize: 14,
                color: "black",
                textAlign: "center",
              }}
              gutterBottom
            >
              {data.description}
            </Typography>
            <Button variant="contained" size="small" sx={{ backgroundColor: data.category.color, color: 'white' }}>
              {data.category.name}
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SubTopicCard;
