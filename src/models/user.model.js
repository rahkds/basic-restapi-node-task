import { EntitySchema } from 'typeorm';

const userModel = new EntitySchema({
    name: 'Users',
    tableName: 'users',
    columns: {
        user_id: {
            primary: true,
            type: 'bigint',
            generated: true,
        },    
        email: {
            type: 'varchar',
            length: 255,
            nullable: false,
        },         
        phone_number: {
            type: 'bigint',
            nullable:false,
        },
        first_name: {
            type: 'varchar',
            length: 255,
            nullable: false,
        },  
        last_name: {
            type: 'varchar',
            length: 255,
            nullable: true,
        },                       
        created_at: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            nullable: false
        },
        updated_at: {
            type: 'timestamp',
            default : () => 'CURRENT_TIMESTAMP',
            nullable: false,
            onUpdate: 'CURRENT_TIMESTAMP',
        },
    },
    uniques : [
        {
            name : "UNIQ_IDX_EMAIL",
            columns : ['email'],            
        }
    ],
    indices : [

        {
            name : "IDX_NAME",
            columns : ['first_name'],
        }
    ]
    
});

export default userModel;

