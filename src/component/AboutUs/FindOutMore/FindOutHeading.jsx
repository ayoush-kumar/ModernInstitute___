import React from "react";
import search from "../../../assets/images/search.png";
import styles from "../../../style/layout.module.css";

const FindOutHeading = () => {
  return (
    <>
      <div className={styles.findOutCont}>
        <img className={styles.findOutIcon} src={search} alt="" />
        <span className={styles.findOutHeading}>Find Out More About Us</span>
      </div>

      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {FindOut.map((item, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 400, border: "1px solid black ", mt: 2 }}
          >
            <CardMedia
              component="img"
              alt="FindNewPlan"
              height="140"
              image={item.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="black"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="black">
                {item.des}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box> */}
    </>
  );
};

export default FindOutHeading;
