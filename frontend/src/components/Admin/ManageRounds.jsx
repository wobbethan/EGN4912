import { Button } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../../Server";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllEventsAdmin } from "../../redux/actions/event";
const ManageRounds = () => {
  const { allEventsAdmin } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const removeEvent = async (id) => {
    axios
      .delete(`${server}/event/delete-shop-event/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Round Deleted");
        window.location.reload();
      });
  };

  useEffect(() => {
    dispatch(getAllEventsAdmin(user._id));
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },

    {
      field: "numInvestments",
      headerName: "Investments",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "start",
      headerName: "Start Date",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "end",
      headerName: "End Date",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete Event",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => removeEvent(params.row.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  allEventsAdmin &&
    allEventsAdmin.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        start:
          item?.start_Date === "undefined"
            ? "N/A"
            : item?.start_Date.slice(0, 10),
        end:
          item?.finish_Date === "undefined"
            ? "N/A"
            : item?.finish_Date.slice(0, 10),
        numInvestments: item.numInvestments,
      });
    });

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid
        rows={row}
        columns={columns}
        pageSizeOptions={[10, 20, 50]}
        disableSelectionOnClick
        autoHeight
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default ManageRounds;