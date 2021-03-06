
// Fuseki Server
var fusekiUrlConfig = "http://fbw-sgmwi.th-brandenburg.de:3030/akwi_graph_test";

// Formular Meta Data
var validFormularConfig = 
{
    "modi":[
        {
            "modus": "UpdatePerson",
            "id_fields": ["id_familyName", "id_givenName"],
            "fields": ["familyName", "givenName", "honorificPrefix", "telephone", "eMail"]
        },
        {
            "modus": "UpdateDepartmentOrFaculty",
            "id_fields": ["id_legalName", "id_name"],
            "fields": ["name"]
        },
        {
            "modus": "UpdateCourse",
            "id_fields": ["id_legalName", "id_name", "id_targetName"],
            "fields": ["name","newEnrollments","totalEnrollments"]
        },
        {
            "modus": "UpdateCollegeOrUniversity",
            "id_fields": ["id_legalName"],
            "fields": ["legalName","url","addressCountry","addressLocality","addressRegion","postalCode","streetAddress"]
        },
        {
            "modus": "InsertCollegeOrUniversity",
            "id_fields": ["legalName","url","addressCountry","addressLocality","addressRegion","postalCode","streetAddress"],
            "fields": ["legalName","url","addressCountry","addressLocality","addressRegion","postalCode","streetAddress"]
        },
        {
            "modus": "InsertDepartmentOrFaculty",
            "id_fields": ["legalName","name"],
            "fields": ["legalName","name"]
        },
        {
            "modus": "InsertPerson",
            "id_fields": ["legalName", "name", "familyName", "givenName", "honorificPrefix", "telephone", "eMail"],
            "fields": ["legalName", "name", "familyName", "givenName", "honorificPrefix", "telephone", "eMail"]
        },
        {
            "modus": "InsertCourse",
            "id_fields": ["legalName", "facultyName", "targetName", "name", "newEnrollments", "totalEnrollments"],
            "fields": ["legalName", "facultyName", "targetName", "name", "newEnrollments", "totalEnrollments"]
        },
        {
            "modus": "DeletePerson",
            "id_fields": ["familyName", "givenName"],
            "fields": ["familyName", "givenName"]
        },
        {
            "modus": "DeleteDepartmentOrFaculty",
            "id_fields": ["legalName", "name"],
            "fields": ["legalName", "name"]
        },
        {
            "modus": "DeleteCourse",
            "id_fields": ["legalName", "name", "targetName"],
            "fields": ["legalName", "name", "targetName"]
        },
        {
            "modus": "DeleteCollegeOrUniversity",
            "id_fields": ["legalName"],
            "fields": ["legalName"]
        }
    ]
}
;
