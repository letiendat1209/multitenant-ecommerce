import { isSuperAdmin } from "@/lib/access";
import { Tenant } from "@/payload-types";
import { CollectionConfig } from "payload";


export const Products: CollectionConfig = {
    slug: "products",
    access: {
        read: () => true,
        create: ({ req }) => {
            if (isSuperAdmin(req.user)) return true;
            const tenant = req.user?.tenants?.[0]?.tenant as Tenant;

            return Boolean(tenant?.stripeDetailsSubmitted)
        },
        delete: ({ req }) => isSuperAdmin(req.user),
    },
    admin: {
        useAsTitle: "name",
        description: "You must verify your account before you can creating products",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "richText",
        },
        {
            name: "price",
            type: "number",
            required: true,
            admin: {
                description: "Price in USD",
            }
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
            hasMany: true,
        },
        {
            name: "tags",
            type: "relationship",
            relationTo: "tags",
            hasMany: false,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "cover",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "refundPolicy",
            type: "select",
            options: ["30-day", "14-day", "7-day", "3-day", "1-day", "no-refund"],
            defaultValue: "30-day",
        },
        {
            name: "content",
            type: "richText",
            admin: {
                description: "Protected content only visible to customers after purchase. Add product documentation, downloadable files, getting started guides, etc.",
            },
        },
        {
            name: "isPrivate",
            label: "Private",
            defaultValue: false,
            type: "checkbox",
            admin: {
                description: "If checked, this product will not be show on the public storefront"
            },
        },
        {
            name: "isArchived",
            label: "Archive",
            defaultValue: false,
            type: "checkbox",
            admin: {
                description: "If checked, this product will be archived"
            },
        },
    ],
};