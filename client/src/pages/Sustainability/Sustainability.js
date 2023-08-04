import React from "react";
import "./Sustainability.css";
import { Grid } from "@mui/material";
import tipOne from "../../assets/pexels-tara-clark-9070110.jpg";
import tipTwo from "../../assets/02.jpg";
import tipThree from "../../assets/iStock-516546942.jpg";
import tipFour from "../../assets/Nest-Storage-Joseph-Joseph.jpg";
import tipFive from "../../assets/Water_drop_on_a_leaf.jpg";
import tipSix from "../../assets/DSC06417_edited-1.jpg";
import tipSeven from "../../assets/public-domain-compost-food-scraps-waste-image-from-rawpixel-id-5905852-jpeg.jpg";
import tipEight from "../../assets/shopping-1517514471nl8.jpg";
import tipNine from "../../assets/Expanding-role-of-design-1536x1536-400_Standard.jpg";
import tipTen from "../../assets/united-for-climate-strike-girl-protests-climate-politics-quot-act-now-quot-written-on-her-hands.jpeg";



const Sustainability = () => {
  return (
    <div className="sustainability-container">
      <h2>Sustainability Tips</h2>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip right">
            <img src={tipTwo} alt="Tip 1" className="tip-image" />
            <p className="sus">
              <strong>Reduce Food Waste</strong><br /> Plan your meals and buy only what you need to minimize food waste. Consider composting food scraps to reduce landfill waste.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip">
            <img src={tipOne} alt="Tip 2" className="tip-image" />
            <p className="fus">
              <strong>Buy Local, Buy Seasonal</strong><br /> Support local farmers and reduce the carbon footprint of your meals by choosing foods that are in season and locally produced.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip right">
            <img src={tipThree} alt="Tip 3" className="tip-image" />
            <p className="sus">
            <strong>Opt for Plant-Based Meals</strong><br /> Incorporate more plant-based foods into your diet to reduce the environmental impact of meat production.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip left">
            <img src={tipFour} alt="Tip 4" className="tip-image" />
            <p className="fus">
            <strong>Reusable Containers & Utensils</strong><br /> Say no to single-use plastics by using reusable containers and utensils for your meals and snacks.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip right">
            <img src={tipFive} alt="Tip 5" className="tip-image" />
            <p className="sus">
            <strong>Conserve Water</strong><br /> Be mindful of water usage while cooking and cleaning. Fix leaks and opt for water-saving practices.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip left">
            <img src={tipSix} alt="Tip 6" className="tip-image" />
            <p className="fus">
            <strong>Support Sustainable Fishing</strong><br /> Choose seafood from sustainable sources to protect marine ecosystems and fish populations.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip right">
            <img src={tipSeven} alt="Tip 7" className="tip-image" />
            <p className="sus">
            <strong>Compost Food Scraps</strong><br /> Composting food scraps reduces landfill waste and creates nutrient-rich compost for your garden.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip left">
            <img src={tipEight} alt="Tip 8" className="tip-image" />
            <p className="fus">
            <strong>Shop Smart</strong><br /> Be a conscious consumer by supporting brands and products that prioritize sustainability and eco-friendly practices.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip right">
            <img src={tipNine} alt="Tip 9" className="tip-image" />
            <p className="sus">
            <strong>Educate Others</strong><br /> Share your sustainability knowledge with friends and family to promote awareness and collective action.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sustainability-tip left">
            <img src={tipTen} alt="Tip 10" className="tip-image" />
            <p className="fus">
              <strong>Advocate for Change</strong><br /> Get involved in local initiatives and advocate for policies that promote sustainable food systems and reduce food waste.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sustainability;
