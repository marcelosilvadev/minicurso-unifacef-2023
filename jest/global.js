"use strict";

jest.spyOn(Date, "now").mockImplementation(() => 1479427200000);

global.token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiMDFQSjMxNCIsImlzc3VlciI6ImZlZWRiYWNrLXNtYXJ0LWFwaSIsIm5hbWUiOiJQZWRybyBXSWxsZXIgTWFycXVlcyBGaWd1ZXJlZG8iLCJlbWFpbCI6InBlZHJvLmZpZ3VlcmVkb0BncnVwb211bHRpLmNvbS5iciIsInBlcm1pc3Npb25zIjpbImFkbWluIiwicmVhZF9mZWVkYmFjayJdLCJpYXQiOjE2Njk5Mjc1NDcsImV4cCI6MTY2OTk1NjM0N30.1ZFRXCKK5kFv7hwKKfyz404owExHRmF08xShrVR1hb4";

global.invalidToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJmZWVkYmFjay1zbWFydC1hcGkiLCJuYW1lIjoiRmVlZGJhY2sgU21hcnQgQXBpIiwicGVybWlzc2lvbnMiOlsiYWRtaW4iXX0.ejJCtn9EmW29zC6KmgvxKiDrG0qCd6dFi7pptlShRIM";