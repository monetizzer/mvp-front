import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import * as yup from "yup";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../../Select";
import { formattedColorsOptions } from "../../../../utils/colorsOptions";
import { Textarea } from "../../Textarea";

const CreateUserFormSchema = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
	productImage: yup.string().required(),
	deliveryMethod: yup.string().required(),
	price: yup.number().positive('Valor tem que ser acima de zero').required(),
	color: yup.object().shape({
		label: yup.string().required(),
		value: yup.number().positive('Valor tem que ser acima de zero').required(),
		emoji: yup.string().required(),
	}),
	// variations: yup.array().of(
	// 	yup.object().shape({
	// 		name: yup.string().required(),
	// 		price: yup.number().positive('Valor tem que ser acima de zero').required(),
	// 		description: yup.string().required(),
	// })),
});

export const AddProductForm: React.FC = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(CreateUserFormSchema),
	});
	const { errors } = formState;
	
	const handleCreatePack = (
		// values
	) => {
		// await createUser.mutateAsync(values);
		console.log("oi")
		// router.push("/users");
	};
	return (
		<Box
				as="form"
				onSubmit={handleSubmit(handleCreatePack)}
				flex="1"
				borderRadius="8"
				bg="gray.800"
			>
				<Heading size="lg" fontWeight="normal">
					Criar Produto
				</Heading>

				<Divider my="6" borderColor="gray.700" />

				<VStack spacing="8">
					<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
						<Input
							label="Nome do pack"
							{...register("name")}
						/>
						<Input
							label="Capa do pack"
							{...register("productImage")}
						/>
					</SimpleGrid>

					<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
						<Input
							type="text"
							label="Preço"
							{...register("price")}
						/>
						<Select
							label="Método de envio"
							{...register("deliveryMethod")}
							options={[{ value: "automatic", optionName: "Automático"}]}
						/>
					</SimpleGrid>

					<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
						<Select
							label="Tipo do produto"
							{...register("type")}
							options={[{ value: "pack", optionName: "pack"}]}
						/>
						<Select
							label="Cor do produto"
							{...register("color")}
							options={formattedColorsOptions}
						/>
					</SimpleGrid>

					<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
						<Textarea
							label="Descrição"
							{...register("description")}
						/>
					</SimpleGrid>
				</VStack>

				<Flex my="8" justify="flex-end">
					<HStack spacing="4">
						<Button
							colorScheme="purple"
							type="submit"
							isLoading={formState.isSubmitting}
						>
							Próximo
						</Button>
					</HStack>
				</Flex>
			</Box>
	)
}