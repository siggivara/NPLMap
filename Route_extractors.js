

    // https://impfzentrum.openrouteservice.org/#/directions/
    coordinatesString = "";
    r.features[0].geometry.coordinates.forEach((point) => {
        coordinatesString += `[${point[1]}, ${point[0]}],`;
    });
    coordinatesString



    // npl-kartet
        polylineText = "";
        route.forEach((point) => {
            polylineText += `[${point.lat}, ${point.lng}],`;})
        polylineText



    // Ut.no
    coordinatesString = "";
    r.data.ntb_getRoute.geometry.coordinates.forEach((point) => {
        coordinatesString += `[${point[1]}, ${point[0]}],`;});
    coordinatesString