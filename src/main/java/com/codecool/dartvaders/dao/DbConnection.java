package com.codecool.dartvaders.dao;

import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {

    private static final String DATABASE = "jdbc:postgresql://localhost:5432/dartvaders";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "postgres"; // "postgres";

    public static java.sql.Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
                DATABASE,
                DB_USER,
                DB_PASSWORD);
    }

}

