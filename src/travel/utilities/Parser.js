function parseVenueHistoryResponse(response) {
  const { items } = response.response.venues;
  
  return items.map(item => {
    const { id } = item.venue;
    const { name } = item.venue;
    const { lat } = item.venue.location;
    const { lng } = item.venue.location;
    
    return {
      id,
      name,
      lat,
      lng,
    };
  });
}

function parseVenueHistoryError(error) {
  const { errorDetail } = error.error.meta;
  
  return errorDetail;
}

export {
  parseVenueHistoryResponse,
  parseVenueHistoryError,
};
