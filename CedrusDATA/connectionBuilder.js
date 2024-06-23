(function dsbuilder(attr) {
    var urlBuilder = "jdbc:trino://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?SSL=true&SSLVerification=NONE&source=Tableau-JDBC";
    return [urlBuilder];
})
