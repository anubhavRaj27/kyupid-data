<template>
  <l-map style="height:1000px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-geo-json 
        :geojson="geojson"
        :options="options"
    >,
    <l-popup>Hello!</l-popup>
    </l-geo-json>
  </l-map>
</template>

<script>

import axios from 'axios'
import {LMap, LTileLayer,LGeoJson} from 'vue2-leaflet';
import { featureGroup, FeatureGroup, Icon } from 'leaflet';


  

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

 

export default { 
  
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },

  async created(){
    let response= await axios.get('https://kyupid-api.vercel.app/api/areas');
    response.data instanceof Object;
    this.geojson=response.data;
    console.warn(this.geojson)
    let result= await axios.get('https://kyupid-api.vercel.app/api/users');
    this.users=result.data.users;
   

  },
  computed: {

    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      }
    },
    onEachFeatureFunction() {
     
     return(feature, layer)=>{
          layer.bindTooltip(
          "<div>area id:" +
            feature.properties.area_id +
            "</div><div>name: " +
            feature.properties.name +
            "</div>"+"<div>males in area:" + "</div>",
          { permanent: false, sticky: true }
        )  
      }
    }, 
   
    
   },
 
   
  data () {
    return {
      geoData: featureGroup,
      geoDataWithCount: FeatureGroup,
      maleUsers: null,
      users: [],
      geojson: null,  
      url: 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=6bb7cea6486141598887ec8eb9449c88',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10.15,
      center: [	12.972442,	77.580643],
    
    };
  }
}
</script>