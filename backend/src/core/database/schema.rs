table! {
    event (id) {
        id -> Int4,
        name -> Varchar,
        description -> Nullable<Varchar>,
        event_date -> Date,
        begin_time -> Nullable<Time>,
        end_time -> Nullable<Time>,
        active -> Bool,
        user_id -> Int4,
        importance -> Int4,
        frequency -> Int4,
        category -> Int4,
    }
}

table! {
    user_profile (id) {
        id -> Int4,
        name -> Varchar,
        gender -> Gender_enum,
        birthdate -> Date,
        email -> Varchar,
        username -> Varchar,
        iterations -> Int4,
        salt -> Varchar,
        hash -> Varchar,
    }
}

joinable!(event -> user_profile (user_id));

allow_tables_to_appear_in_same_query!(
    event,
    user_profile,
);
