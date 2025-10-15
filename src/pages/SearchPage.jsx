import React from "react";
import { PageLayout } from "../components/PageLayout";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useQuery } from "react-query";
import { getSearchedData } from "../utils";
import { MyCard } from "../components/MyCard";

export const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [txt, setTxt] = useState("");
  const [value, setValue] = useState(0);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["results", value == 0 ? "movie" : "tv", txt, page],
    queryFn: getSearchedData,
    enabled: !!txt,
  });
  const inputRef = useRef();

  console.log(txt);
  data && console.log(data);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageLayout title="SearchPage" page={page} setPage={setPage} data={data}>
      <Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            flexDirection: "column",
            marginBottom: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <TextField
              id="outlined-controlled"
              label="Search"
              variant="outlined"
              className="searchBar"
              inputRef={inputRef}
              sx={{
                "& label.Mui-focused": {
                  color: "#818cf8", // alapértelmezett (nem fókuszált)
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // alapértelmezett
                  },
                  "&:hover fieldset": {
                    borderColor: "#818cf8", // hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#818cf8", // selected / fókuszban
                  },
                },
              }}
            />{" "}
            <Button
              className="searchBtn"
              onClick={() => setTxt(inputRef.current.value)}
            >
              <FaSearch size={40} />
            </Button>
          </Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Movies" />
              <Tab label="TV Series" />
            </Tabs>
          </Box>
        </Box>
        <Grid container spacing={10} justifyContent="center">
          {data &&
            data.results.map((obj) =>
              value == 0 ? (
                <MyCard key={obj.id} {...obj} type="movie" />
              ) : (
                <MyCard
                  key={obj.id}
                  {...obj}
                  title={obj.name}
                  release_date={obj.first_air_date}
                  type="tv"
                />
              )
            )}
        </Grid>{" "}
      </Grid>
    </PageLayout>
  );
};
